// import {
//     getAllCategories,
//     getAllPostSlugsWithModifyTime
//   } from "@/utils/getData";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
        {
            url: "https://tinamai.xyz",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        },
        //   {
        //     url: "https://tinamai.xyz/about",
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.9
        //   },
        //   {
        //     url: "https://tinamai.xyz/contact",
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.9
        //   }
        // other pages
    ];

    // const postSlugs = await getAllPostSlugsWithModifyTime();
    // const categorySlugs = await getAllCategories();

    const sitemap = [
        ...defaultPages,
        //   ...postSlugs.map((e: any) => ({
        //     url: `https://tinamai.xyz/${e.slug}`,
        //     lastModified: e.modified_at,
        //     changeFrequency: "daily",
        //     priority: 0.8
        //   })),
        //   ...categorySlugs.map((e: any) => ({
        //     url: `https://tinamai.xyz/category/${e}`,
        //     lastModified: new Date(),
        //     changeFrequency: "daily",
        //     priority: 0.7
        //   }))
    ];

    return sitemap as MetadataRoute.Sitemap;
}