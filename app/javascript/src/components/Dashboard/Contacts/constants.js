import JacobProfile from "images/JacobProfile";
import * as yup from "yup";

export const CONTACT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const MENUBAR_DATA = {
  global: [
    {
      label: "All",
      count: 200,
      active: true,
    },
    {
      label: "Arhived",
      count: 80,
      active: false,
    },
    {
      label: "Completed",
      count: 60,
      active: false,
    },
    {
      label: "Phase 2",
      count: 60,
      active: false,
    },
  ],
  segments: [],
  tags: [],
};

export const MENUBAR_TITLE = {
  title: "Contacts",
};

export const TABLE_ROW_DATA = [
  {
    id: 0,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
  },
  {
    id: 1,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
    profile: JacobProfile,
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
  },
  {
    id: 3,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
    profile: JacobProfile,
  },
];

export const ROLES = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  role: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Role is required."),
});
