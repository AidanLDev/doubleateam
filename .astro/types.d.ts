declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"1000most-common-indonesian-words.md": {
  id: "1000most-common-indonesian-words.md",
  slug: "1000most-common-indonesian-words",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"alton-towers.md": {
  id: "alton-towers.md",
  slug: "alton-towers",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"aws-ec2.md": {
  id: "aws-ec2.md",
  slug: "aws-ec2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"aws-s3.md": {
  id: "aws-s3.md",
  slug: "aws-s3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"best-uk-theme-parks.md": {
  id: "best-uk-theme-parks.md",
  slug: "best-uk-theme-parks",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"building-ci-cd-for-free.md": {
  id: "building-ci-cd-for-free.md",
  slug: "building-ci-cd-for-free",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-pass-ielts.md": {
  id: "how-to-pass-ielts.md",
  slug: "how-to-pass-ielts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"marriage-requirements.md": {
  id: "marriage-requirements.md",
  slug: "marriage-requirements",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"netlify-free-static-hosting.md": {
  id: "netlify-free-static-hosting.md",
  slug: "netlify-free-static-hosting",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"obtaining-a-family-visa.md": {
  id: "obtaining-a-family-visa.md",
  slug: "obtaining-a-family-visa",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"royal-family-origin.md": {
  id: "royal-family-origin.md",
  slug: "royal-family-origin",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"what-to-do-in-indonesia.md": {
  id: "what-to-do-in-indonesia.md",
  slug: "what-to-do-in-indonesia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"what-to-do-in-jogja.md": {
  id: "what-to-do-in-jogja.md",
  slug: "what-to-do-in-jogja",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
