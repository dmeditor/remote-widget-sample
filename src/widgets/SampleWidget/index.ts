import { registerSettingComponent, registerWidget } from "dmeditor";
import { nanoid } from "nanoid";

import SampleWidget from "./SampleWidget";
import SettingInput from "./SettingInput";

const registerSampleWidget = function () {
  registerWidget(
    {
      type: "sample",
      name: "Sample widget",
      category: "widget",
      icon: "A",
      settings: [
        {
          name: "Background Color",
          settingComponent: "color",
          property: "settings.backgroundColor",
        },
        {
          name: "Width",
          settingComponent: "setting_input",
          property: "settings.width",
        },
      ],
      events: {
        createBlock: () => ({
          id: nanoid(),
          type: "sample",
          data: {
            level: 2,
            settings: {
              width: 100,
              backgroundColor: "#cccccc",
            },
          },
        }),
        updateData: () => void 0,
      },
    },
    {
      render: SampleWidget,
    }
  );
  registerSettingComponent("setting_input", SettingInput);
};

export default registerSampleWidget;
