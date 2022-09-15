import React, { useState } from "react";

import { Button, Pagination } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menu from "components/Dashboard/Menu";

import { MENUBAR_DATA, MENUBAR_TITLE } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuBarOpen, setMenuBarOpen] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <Menu
        menuData={MENUBAR_DATA}
        menuTitle={MENUBAR_TITLE}
        showMenu={menuBarOpen}
      />
      <Container>
        <Header
          menuBarToggle={() => setMenuBarOpen(open => !open)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table setShowDeleteAlert={setShowDeleteAlert} />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
        <div className="mt-10 flex w-full flex-row justify-end">
          <Pagination count={80} navigate={() => {}} pageNo={3} pageSize={9} />
        </div>
      </Container>
    </>
  );
};

export default Contacts;
