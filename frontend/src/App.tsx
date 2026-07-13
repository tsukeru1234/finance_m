import Button from "./shared/ui/button/Button";
import Input from "./shared/ui/input/Input";

function App() {
  return (
    <>
      <Button type="button" style="primary-button button-small">
        <span>Text</span>
      </Button>
      <br></br>
      <Button type="button" style="secondary-button button-small">
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
        inputId="10"
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
        inputId="644"
        style="input-medium"
        labelStyle="label-medium label-small-gap label-row"
        type="number"
        labelTitle="Text"
        defaultValue={1}
      />
      <br></br>
      <Input
        inputId="1212414214"
        style="input-small"
        labelStyle="label-medium label-small-gap label-row"
        type="number"
        labelTitle="Text"
        defaultValue={1}
      />
      <br></br>
      <Input
        inputId="24234234"
        style="input-large"
        labelStyle="label-large label-small-gap label-row"
        type="number"
        labelTitle="Text"
        defaultValue={1}
      />
      <br></br>
    </>
  );
}

export default App;
