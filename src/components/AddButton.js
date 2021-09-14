import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function AddButton(props) {
  return (
    <IconButton onClick={props.onClick} size="small">
      <AddCircleIcon color="primary" fontSize="large" />
    </IconButton>
  );
}

export default AddButton;
