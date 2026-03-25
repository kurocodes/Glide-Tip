# ✨ GlideTip

A smooth, shape-shifting tooltip component with fluid motion and smart alignment.

GlideTip is a reusable React component that lets tooltips glide, resize, and adapt seamlessly between triggers — without flicker or jumps.

It’s designed to feel intentional, responsive, and just a little bit satisfying.

You can use GlideTip for:

- toolbars
- action menus
- form indicators
- navigation hints
- interactive UI previews

…and anywhere a tooltip deserves more than just “appearing” ✨

## 🛠️ Technologies

- React
- Motion (motion/react)
- TypeScript
- Tailwind CSS

## ✨ Features

- Smooth glide animation between triggers
- Dynamic width interpolation (no snapping)
- Content sliding inside tooltip
- Smart alignment (prevents edge overflow)
- Configurable transitions (spring / timing)
- Custom trigger rendering
- Custom label rendering
- Direction control (top / bottom)
- Hover + focus accessibility support
- Delay control for hover interactions
- Fully reusable & composable
- Lightweight and flexible

## 🧠 Process

GlideTip didn’t start as a reusable component.

It began as a small experiment —  </br>
a tooltip that didn’t just “appear,” but *moved with intent*.

While building it, I noticed something interesting:

> Most tooltips feel disconnected from interaction.

They pop in.  
They pop out.  
No continuity.

So I focused on one idea:

> “What if the tooltip behaved like a single entity,  
> smoothly traveling across triggers?”

That led to:

- shared layout logic  
- dynamic width transitions  
- sliding content instead of swapping  
- and eventually… smart edge alignment

At some point, it stopped being “just a tooltip”  </br>
and started feeling like a small motion system.

So I turned it into GlideTip.

## 🧩 Props

GlideTip keeps things minimal but powerful.

### Required

- `items: GlideTipItem[]`  
  Array of tooltip items (label + trigger).

### Behavior

- `delay?: number (default: 120)`  
  Delay before tooltip appears/disappears on hover.

- `direction?: "top" | "bottom" (default: "top")`  
  Controls tooltip placement.

- `align?: "center" | "smart" (default: "center")`  
  Controls tooltip alignment:
  - `"center"` → always centered
  - `"smart"` → prevents overflow at edges  
    (first = left aligned, last = right aligned)

### Rendering

- `renderTrigger?: (item, index, isActive) => ReactNode`  
  Custom trigger renderer.

- `renderLabel?: (item, index, isActive) => ReactNode`  
  Custom tooltip content renderer.

### Styling

- `containerClassName?: string`  
- `tooltipClassName?: string`  
- `triggersClassName?: string`

### Animation

- `transition?: TooltipTransition`

```ts
type TooltipTransition = {
  tooltip?: {
    x?: Transition;
    width?: Transition;
    opacity?: Transition;
  };
  content?: Transition;
};
```

## 🧱 Item Structure

```ts
type GlideTipItem = {
  id: string;
  label: ReactNode;
  trigger?: ReactNode;
};
```

## 🚀 Usage

### Basic Example

```
<GlideTip
  items={items}
  align="smart"
  direction="top"
/>
```

### Toolbar Example

```
<GlideTip
  items={toolbarItems}
  align="smart"
  triggersClassName="rounded-full border p-1"
  renderTrigger={(item, _, isActive) => (
    <button className={isActive ? "bg-neutral-300" : ""}>
      {item.trigger}
    </button>
  )}
/>
```

### Indicator Example

```
<GlideTip
  items={[
    { id: "1", label: "Step 1" },
    { id: "2", label: "Step 2" },
    { id: "3", label: "Step 3" },
  ]}
/>
```

## 🧪 Running the Project

1. clone the repo:
   `git clone https://github.com/your-username/glidetip.git`
2. install dependencies:
   `npm install`
3. start dev server:
   `npm run dev`

Then open your browser and glide through it ✨

## 👀 Preview

<table> <tr> <td> <video src="YOUR_VIDEO_1" controls></video> </td> <td> <video src="YOUR_VIDEO_2" controls></video> </td> </tr> </table>

## 💖 Final Note

GlideTip is built around a simple idea:

Motion should feel continuous, not reactive.

It’s a small component, </br>
but it carries a lot of intent in how it moves.

Feel free to fork it, remix it, or use it in your own UI. </br>
And if you build something beautiful with it…

…I’d like to see it.
