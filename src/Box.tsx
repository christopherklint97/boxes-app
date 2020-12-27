export interface BoxProps {
  id: any;
  handleRemove?: (id: string) => void;
  width: string | number;
  height: string | number;
  backgroundColor: string;
}

function Box({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "blue",
}: BoxProps) {
  let remove;
  if (handleRemove) {
    remove = () => handleRemove(id);
  }
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}

export default Box;
