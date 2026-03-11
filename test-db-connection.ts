import 'dotenv/config';
import { db } from './src/db';
import { sql } from 'drizzle-orm';

async function testConnection() {
    try {
        console.log('🔍 Probando conexión a la base de datos...\n');

        // Test 1: Conexión básica
        const result = await db.execute(sql`SELECT NOW() as current_time, version() as pg_version`);
        const row = result.rows[0] as { current_time: string; pg_version: string };

        console.log('✅ Conexión exitosa!');
        console.log('⏰ Hora del servidor:', row.current_time);
        console.log('📊 Versión PostgreSQL:', row.pg_version.split(' ')[0], row.pg_version.split(' ')[1]);

        // Test 2: Verificar tablas existentes
        console.log('\n🔍 Verificando tablas en la base de datos...');
        const tables = await db.execute(sql`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name
        `);

        if (tables.rows.length > 0) {
            console.log(`✅ Encontradas ${tables.rows.length} tablas:`);
            tables.rows.forEach((row) => {
                const tableName = (row as { table_name: string }).table_name;
                console.log(`   - ${tableName}`);
            });
        } else {
            console.log('⚠️  No hay tablas creadas aún. Ejecuta: npx drizzle-kit migrate');
        }

        console.log('\n✅ Todo funcionando correctamente!\n');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:\n');
        if (error instanceof Error) {
            console.error('Mensaje:', error.message);
            if ('code' in error) {
                console.error('Código:', (error as any).code);
            }
        }
        console.error('\n💡 Verifica:');
        console.error('   1. Que DATABASE_URL esté en el archivo .env');
        console.error('   2. Que las credenciales sean correctas');
        console.error('   3. Que la base de datos esté accesible desde tu red\n');
        process.exit(1);
    }
}

testConnection();
