import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { MENUBAR_DATA } from "./constants";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Notes">
        {MENUBAR_DATA.global.map(menubarItems => (
          <MenuBar.Block
            active={menubarItems.active}
            count={menubarItems.count}
            key={menubarItems.label}
            label={menubarItems.label}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(
                  prevSearchCollapsed => !prevSearchCollapsed
                ),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {MENUBAR_DATA.segments.map(menubarItems => (
          <MenuBar.Block
            count={menubarItems.count}
            key={menubarItems.label}
            label={menubarItems.label}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        {MENUBAR_DATA.tags.map(menubarItems => (
          <MenuBar.Block
            count={menubarItems.count}
            key={menubarItems.label}
            label={menubarItems.label}
          />
        ))}
      </MenuBar>
    </div>
  );
};

export default Menu;
