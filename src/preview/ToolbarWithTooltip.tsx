import {
  LuCommand,
  LuEye,
  LuMenu,
  LuMessageCircle,
  LuSend,
  LuSparkles,
} from "react-icons/lu";
import type {  } from "../components/glide-tip/types";
import { GlideTip } from "../components/glide-tip";
import type { GlideTipItem } from "../components/glide-tip";

const toolbarItems: GlideTipItem[] = [
  {
    id: "comment",
    label: (
      <>
        <span>Comment</span>
        <span className="font-extralight">C</span>
      </>
    ),
    trigger: <LuMessageCircle className="size-4.5" />,
  },
  {
    id: "enhance",
    label: (
      <>
        <span>Enhance</span>
      </>
    ),
    trigger: <LuSparkles className="size-4.5" />,
  },
  {
    id: "preview",
    label: (
      <>
        <span>Preview</span>
      </>
    ),
    trigger: <LuEye className="size-4.5" />,
  },
  {
    id: "send",
    label: (
      <>
        <span>Send</span>
      </>
    ),
    trigger: <LuSend className="size-4.5" />,
  },
  {
    id: "menu",
    label: (
      <>
        <span>Menu</span>
        <LuCommand className="size-3" />
        <span className="font-extralight">K</span>
      </>
    ),
    trigger: <LuMenu className="size-4.5" />,
  },
];

export default function ToolbarWithTooltip() {
  return (
    <GlideTip
      items={toolbarItems}
      delay={100}
      direction="bottom"
      triggersClassName="rounded-full border border-black/20 bg-[hsl(0deg_0%_90%)] p-1 shadow-sm"
      tooltipClassName=""
      renderTrigger={(item, _index, isActive) => (
        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 transition-all duration-200 ${
            isActive ? "bg-[hsl(0deg_0%_78%)]" : "bg-transparent"
          } hover:cursor-pointer`}
        >
          {item.trigger}
        </button>
      )}
      renderLabel={(item) => (
        <div className="flex items-center gap-2">
          {item.label}
        </div>
      )}
    />
  );
}
