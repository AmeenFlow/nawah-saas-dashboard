
// NextRequest==> هو نوع يمثل الطلب القادم من المتصفح، مثل: الرابط، الكوكيز، الهيدرز.
//NextResponse==> نستخدمه لصناعة الرد، مثل: السماح بالمرور، التحويل، أو تعديل الكوكيز والهيدرز.
import { NextResponse, type NextRequest } from "next/server";

import { siteConfig } from "@/config/site";

/**
 * هذه الدالة تعمل قبل عرض الصفحة.

أي عندما يزور المستخدم رابطًا معيّنًا، لنكيست يمرر الطلب أولًا على هذه الدالة إذا كان المسار مطابقًا للـ matcher.
 */

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl; // نستخرج المسار من الرابط.

    /**
     * إذا كان المستخدم دخل على /، نحوله إلى اللغة الافتراضية.
     * request.url ==> تبني رابطًا كاملًا صحيحًا اعتمادًا على الرابط الحالي
     * return NextResponse.next(); ==>إذا لم يكن المسار /، اسمح للطلب أن يكمل طريقه للصفحة المطلوبة.
     */
    if (pathname === "/") {
        return NextResponse.redirect(
            new URL(`/${siteConfig.defaultLocale}`, request.url),
        );
    }

    return NextResponse.next();
}
//  "/"معناه: شغّل الدالة بروكسي فقط عند زيارة:
export const config = {
    matcher: ["/"],
};