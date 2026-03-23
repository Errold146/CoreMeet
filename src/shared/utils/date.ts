import { es } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

export const formatCreatedDate = (date: Date) => {
    return formatDistanceToNow(date, {
        addSuffix: true,
        locale: es
    })
}
