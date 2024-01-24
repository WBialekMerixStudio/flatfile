import { Flatfile } from "@flatfile/api";

const dataFromBackend = {
  customer: {
      "user": "b148a6d2-1f13-48ca-b459-306539892fe0",
      "company": "ad3f5e6b-2c15-4e72-b064-d57985fe3790"
  },
  fields: [
      {
          "label": "Unique Customer ID 🔵",
          "key": "external_id",
          "validators": [
              {
                  "validate": "unique",
                  "error": "This field must be unique."
              }
          ],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "Prefix 🔵",
          "key": "prefix",
          "validators": [],
          "description": "",
          "alternates": [
              "title"
          ],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "First name 🔵",
          "key": "first_name",
          "validators": [],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "Last name 🔵",
          "key": "last_name",
          "validators": [],
          "description": "",
          "alternates": [
              "surname"
          ],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "Street address 🔵",
          "key": "street_address",
          "validators": [],
          "description": "",
          "alternates": [
              "address"
          ],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "Street address (2) 🔵",
          "key": "street_address_2",
          "validators": [],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "City 🔵",
          "key": "city",
          "validators": [],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "State 🔵",
          "key": "state",
          "validators": [],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "Zip code 🔵",
          "key": "zip_code",
          "validators": [],
          "description": "",
          "alternates": [
              "zip-code",
              "zipcode",
              "postal code",
              "postcode"
          ],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "Email 🔵",
          "key": "email",
          "validators": [],
          "description": "",
          "alternates": [
              "e-mail"
          ],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "Phone number 🔵",
          "key": "phone_number",
          "validators": [],
          "description": "",
          "alternates": [
              "phone"
          ],
          "options": [],
          "allow_multiple_columns": true
      },
      {
          "label": "City District",
          "key": "e726a56a-d194-41a9-8641-86a349b44f05",
          "validators": [],
          "description": "",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "llaa",
          "key": "4957b198-6727-44df-9078-89f248774b76",
          "validators": [],
          "description": "opis",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "drugiCustomGiedl",
          "key": "25dce1ee-9128-4e25-a854-095caf66e629",
          "validators": [],
          "description": "drugiCustomGiedl",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      },
      {
          "label": "first multiple",
          "key": "6018a49e-2a26-4dd3-aa83-4fc44703d717",
          "validators": [],
          "description": "desc",
          "alternates": [],
          "options": [],
          "allow_multiple_columns": false
      }
  ]
}

export const workbook: Pick<
  Flatfile.CreateWorkbookConfig,
  "name" | "labels" | "sheets" | "actions"
> = {
  name: "All Data",
  labels: ["pinned"],
  sheets: [
    {
      name: "Contacts",
      slug: "contacts",
      fields: dataFromBackend.fields.map((field) => ({
          key: field.key,
          type: "string",
          label: field.label,
          description: field.description,
          constraints: field.validators?.map((validator) => ({
            type: validator.validate,
          })) as Flatfile.Constraint[],
      })),
    },
  ],
  actions: [
    {
      operation: "submitActionFg",
      mode: "foreground",
      label: "Submit foreground",
      description: "Submit data to webhook.site",
      primary: true,
    },
  ],
};
