import JacobProfile from "images/JacobProfile";

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
