import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

export const tableColumnData = setShowDeleteAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30",
    render: (name, contact) => (
      <div className="flex space-x-2">
        <Avatar
          className="mr-2"
          size="large"
          user={{
            name,
            imageUrl: contact.profile,
          }}
        />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body2">{contact.role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30",
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    width: "10",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li>Edit</li>
        <li onClick={setShowDeleteAlert}>Delete</li>
      </Dropdown>
    ),
  },
];
