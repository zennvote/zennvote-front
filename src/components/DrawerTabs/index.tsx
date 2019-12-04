import React, { FC, useState } from "react";
import { Tab, Tabs } from "@material-ui/core";

interface DrawerTabsProps {
  onChange: (n: number) => void;
}

const DrawerTabs: FC<DrawerTabsProps> = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };
  
  return (
    <Tabs value={ value } onChange={handleChange} centered>
      <Tab label="회차 및 번호로 찾기" />
      <Tab label="프로듀서로 찾기" />
    </Tabs>
  );
};

export default DrawerTabs;