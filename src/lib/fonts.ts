import { Cairo, Geist } from "next/font/google";

export const cairo = Cairo({     //نعرّف خط Cairo، وهو مناسب جدًا للعربية.

    subsets: ["arabic", "latin"],//نطلب دعم العربية واللاتينية.
    variable: "--font-cairo",//نربط الخط بمتغير CSS حتى نستخدمه لاحقًا داخل Tailwind أو CSS.
    display: "swap",//يعني اعرض النص بخط بديل مؤقتًا إلى أن يتم تحميل الخط، وهذا أفضل لتجربة المستخدم.
});

export const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
    display: "swap",
});