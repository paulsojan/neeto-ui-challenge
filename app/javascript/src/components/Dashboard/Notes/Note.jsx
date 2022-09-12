import React from "react";

import dayjs from "dayjs";
import AvatarProfile from "images/AvatarProfile";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui";

const Note = ({ note, setShowDeleteAlert, setSelectedNoteIds }) => (
  <div className="mb-3 w-full border border-gray-300 p-4 shadow-md">
    <div className="flex justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit</li>
        <li
          onClick={() => {
            setShowDeleteAlert(true);
            setSelectedNoteIds(note.id);
          }}
        >
          Delete
        </li>
      </Dropdown>
    </div>
    <div className="mb-2 mt-1">
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
    </div>
    <hr />
    <div className="mt-3 flex justify-between">
      <Tag
        className="neeto-ui-bg-gray-200"
        label="Getting Started"
        size="small"
      />
      <div className="flex items-center space-x-2">
        <Clock size={15} />
        <Tooltip
          content={dayjs(note.created_at).format("dddd, hh:mmA")}
          position="top"
        >
          <Typography style="body3">
            Created {dayjs(note.created_at).fromNow()}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: "neeto UI",
            imageUrl: AvatarProfile,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
