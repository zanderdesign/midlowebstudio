import { z, defineCollection } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
            tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

export const collections = {
	blog: blogsCollection,
};