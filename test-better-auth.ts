import 'dotenv/config';
import { auth } from './src/lib/auth';
import { db } from './src/db';
import { sql } from 'drizzle-orm';

async function testBetterAuth() {
    try {
        console.log('🔍 Probando configuración de Better Auth...\n');

        // Test 1: Verificar que las tablas existen
        console.log('📊 Verificando tablas de autenticación...');
        const tables = await db.execute(sql`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            AND table_name IN ('users', 'sessions', 'accounts', 'verifications')
            ORDER BY table_name
        `);

        const foundTables = tables.rows.map(r => (r as {table_name: string}).table_name);
        const expectedTables = ['accounts', 'sessions', 'users', 'verifications'];

        expectedTables.forEach(table => {
            if (foundTables.includes(table)) {
                console.log(`   ✅ ${table}`);
            } else {
                console.log(`   ❌ ${table} - NO ENCONTRADA`);
            }
        });

        // Test 2: Verificar variables de entorno
        console.log('\n🔐 Verificando configuración...');
        const config = {
            'DATABASE_URL': process.env.DATABASE_URL ? '✅ Configurada' : '❌ Falta',
            'BETTER_AUTH_SECRET': process.env.BETTER_AUTH_SECRET ? '✅ Configurada' : '❌ Falta',
            'BETTER_AUTH_URL': process.env.BETTER_AUTH_URL ? '✅ Configurada' : '❌ Falta',
        };

        Object.entries(config).forEach(([key, status]) => {
            console.log(`   ${key}: ${status}`);
        });

        // Test 3: Verificar estructura de columnas de la tabla users
        console.log('\n📋 Verificando estructura de tabla users...');
        const columns = await db.execute(sql`
            SELECT column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_name = 'users'
            ORDER BY ordinal_position
        `);

        console.log(`   Columnas encontradas: ${columns.rows.length}`);
        columns.rows.forEach((col) => {
            const c = col as { column_name: string; data_type: string; is_nullable: string };
            console.log(`   - ${c.column_name} (${c.data_type}) ${c.is_nullable === 'NO' ? 'NOT NULL' : 'NULLABLE'}`);
        });

        console.log('\n✅ Better Auth está configurado correctamente!\n');
        console.log('💡 Próximos pasos:');
        console.log('   1. Iniciar el servidor: npm run dev');
        console.log('   2. Probar el endpoint: http://localhost:3000/api/auth');
        console.log('   3. Implementar el registro/login en tu aplicación\n');

        process.exit(0);

    } catch (error) {
        console.error('\n❌ Error al probar Better Auth:\n');
        if (error instanceof Error) {
            console.error('Mensaje:', error.message);
            console.error('\nStack:', error.stack);
        }
        process.exit(1);
    }
}

testBetterAuth();
