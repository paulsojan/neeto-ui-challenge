import React, { useState } from "react";

import { Button, Pagination } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menu from "components/Dashboard/Menu";

import { MENUBAR_DATA, MENUBAR_TITLE } from "./constants";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuBarOpen, setMenuBarOpen] = useState(true);

  return (
    <>
      <Menu
        menuData={MENUBAR_DATA}
        menuTitle={MENUBAR_TITLE}
        showMenu={menuBarOpen}
      />
      <Container>
        <Header
          actionBlock={<Button icon="ri-add-line" label="Add Note" />}
          menuBarToggle={() => setMenuBarOpen(open => !open)}
          title="All Contacts"
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table />
        <div className="mt-10 flex w-full flex-row justify-end">
          <Pagination count={80} navigate={() => {}} pageNo={3} pageSize={9} />
        </div>
      </Container>
    </>
  );
};

export default Contacts;
