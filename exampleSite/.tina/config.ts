import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "265729d9-fb07-42e2-9785-ca049f49f3ca", // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Post (en)",
        name: "post__en_",
        path: "exampleSite/content/english/blog",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Post (fr)",
        name: "post__fr_",
        path: "exampleSite/content/french/blog",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "author",
            label: "author",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Author (en)",
        name: "author__en_",
        path: "exampleSite/content/english/author",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "email",
            label: "email",
          },
          {
            type: "object",
            name: "social",
            label: "social",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "icon",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
            ],
          },
        ],
      },
      {
        label: "Author (fr)",
        name: "author__fr_",
        path: "exampleSite/content/french/author",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "email",
            label: "email",
          },
          {
            type: "object",
            name: "social",
            label: "social",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "icon",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
            ],
          },
        ],
      },
      {
        label: "Course (en)",
        name: "course__en_",
        path: "exampleSite/content/english/course",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "category",
            label: "category",
          },
          {
            type: "string",
            name: "teacher",
            label: "teacher",
          },
          {
            type: "string",
            name: "duration",
            label: "duration",
          },
          {
            type: "string",
            name: "weekly",
            label: "weekly",
          },
          {
            type: "string",
            name: "fee",
            label: "fee",
          },
          {
            type: "string",
            name: "apply_url",
            label: "apply_url",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Course (fr)",
        name: "course__fr_",
        path: "exampleSite/content/french/course",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "category",
            label: "category",
          },
          {
            type: "string",
            name: "teacher",
            label: "teacher",
          },
          {
            type: "string",
            name: "duration",
            label: "duration",
          },
          {
            type: "string",
            name: "weekly",
            label: "weekly",
          },
          {
            type: "string",
            name: "fee",
            label: "fee",
          },
          {
            type: "string",
            name: "apply_url",
            label: "apply_url",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Notice (en)",
        name: "notice__en_",
        path: "exampleSite/content/english/notice",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "download_link",
            label: "download_link",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Notice (fr)",
        name: "notice__fr_",
        path: "exampleSite/content/french/notice",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "download_link",
            label: "download_link",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Teacher (en)",
        name: "teacher__en_",
        path: "exampleSite/content/english/teacher",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "course",
            label: "course",
          },
          {
            type: "string",
            name: "bio",
            label: "bio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "interest",
            label: "interest",
            list: true,
          },
          {
            type: "object",
            name: "contact",
            label: "contact",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "name",
              },
              {
                type: "string",
                name: "icon",
                label: "icon",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
            ],
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Teacher (fr)",
        name: "teacher__fr_",
        path: "exampleSite/content/french/teacher",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "course",
            label: "course",
          },
          {
            type: "string",
            name: "bio",
            label: "bio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "interest",
            label: "interest",
            list: true,
          },
          {
            type: "object",
            name: "contact",
            label: "contact",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "name",
              },
              {
                type: "string",
                name: "icon",
                label: "icon",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
            ],
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Event (en)",
        name: "event__en_",
        path: "exampleSite/content/english/event",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "location",
            label: "location",
          },
          {
            type: "string",
            name: "fee",
            label: "fee",
          },
          {
            type: "string",
            name: "apply_url",
            label: "apply_url",
          },
          {
            type: "object",
            name: "speaker",
            label: "speaker",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "name",
              },
              {
                type: "image",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "designation",
                label: "designation",
              },
            ],
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Event (fr)",
        name: "event__fr_",
        path: "exampleSite/content/french/event",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "location",
            label: "location",
          },
          {
            type: "string",
            name: "fee",
            label: "fee",
          },
          {
            type: "string",
            name: "apply_url",
            label: "apply_url",
          },
          {
            type: "object",
            name: "speaker",
            label: "speaker",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "name",
              },
              {
                type: "image",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "designation",
                label: "designation",
              },
            ],
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Research (en)",
        name: "research__en_",
        path: "exampleSite/content/english/research",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Research (fr)",
        name: "research__fr_",
        path: "exampleSite/content/french/research",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
        ],
      },
      {
        label: "Scholarship (en)",
        name: "scholarship__en_",
        path: "exampleSite/content/english/scholarship",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Scholarship (fr)",
        name: "scholarship__fr_",
        path: "exampleSite/content/french/scholarship",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "About (en)",
        name: "about__en_",
        path: "exampleSite/content/english/about",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        label: "About (fr)",
        name: "about__fr_",
        path: "exampleSite/content/french/about",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        label: "Contact (en)",
        name: "contact__en_",
        path: "exampleSite/content/english/contact",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        label: "Contact (fr)",
        name: "contact__fr_",
        path: "exampleSite/content/french/contact",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        label: "Created Pages (en)",
        name: "created_pages__en_",
        path: "exampleSite/content/english/pages",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
        ],
      },
      {
        label: "Created Pages (fr)",
        name: "created_pages__fr_",
        path: "exampleSite/content/french/pages",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
        ],
      },
      {
        label: "All Pages (en)",
        name: "all_pages__en_",
        path: "exampleSite/content/english",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
        ],
      },
      {
        label: "All Pages (fr)",
        name: "all_pages__fr_",
        path: "exampleSite/content/french",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "image",
            name: "bg_image",
            label: "bg image",
          },
        ],
      },
      {
        label: "Data (en)",
        name: "data__en_",
        path: "exampleSite/data/en",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Data (fr)",
        name: "data__fr_",
        path: "exampleSite/data/fr",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "i18n",
        name: "i18n",
        path: "exampleSite/i18n",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Configuration",
        name: "configuration",
        path: "exampleSite",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
