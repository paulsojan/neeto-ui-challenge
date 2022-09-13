import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: "",
  tag: "",
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const MENUBAR_DATA = {
  global: [
    {
      label: "All",
      count: 200,
      active: true,
    },
    {
      label: "Users",
      count: 80,
      active: false,
    },
    {
      label: "Leads",
      count: 60,
      active: false,
    },
    {
      label: "Visitors",
      count: 60,
      active: false,
    },
  ],
  segments: [
    {
      label: "Europe",
      count: 80,
    },
    {
      label: "Middle East",
      count: 60,
    },
    {
      label: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      label: "Sales",
      count: 80,
    },
    {
      label: "Finance",
      count: 60,
    },
    {
      label: "User Experience",
      count: 60,
    },
  ],
};

export const TAGS = [
  {
    label: "Getting Started",
    value: "getting_started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user_flow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const CONTACT = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Assigned Contact is required."),
  tag: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Tag is required."),
});
