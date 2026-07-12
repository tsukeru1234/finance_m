import Button from "./shared/ui/button/Button";
import Input from "./shared/ui/input/Input";

function App() {
  return (
    <>
      <Button type="button" style="button-small">
        <span>Text</span>
      </Button>
      <br></br>
      <Input
        inputId="1"
        style="input-small"
        labelStyle="label-small label-col label-small-gap"
        type="text"
        labelTitle="Text"
        placeholderTitle="Text"
      />
      <br></br>
      <Input
        inputId="4"
        style="input-large"
        labelStyle="label-small label-col label-large-gap"
        type="textarea"
        labelTitle="Text"
        placeholderTitle="Text"
      />
      <br></br>
      <Input
        inputId="5"
        style="input-medium"
        labelStyle="label-medium label-small-gap"
        type="radio"
        labelTitle="Text"
      />
      <br></br>
      <Input
        inputId="6"
        style="input-medium"
        labelStyle="label-medium label-small-gap"
        type="checkbox"
        labelTitle="Text"
      />
      <br></br>
    </>
  );
}

export default App;
