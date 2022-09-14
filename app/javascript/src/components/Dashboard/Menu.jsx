import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menu = ({ menuData, showMenu, menuTitle }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const { title } = menuTitle;

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title={title}>
        {menuData.global.map(menubarItems => (
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
        {menuData.segments.map(menubarItems => (
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
        {menuData.tags.map(menubarItems => (
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
