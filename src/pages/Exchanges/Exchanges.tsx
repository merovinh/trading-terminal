import { useDispatch, useSelector } from "react-redux";
import { ExchangesList } from "../../components/ExchangesList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { fetchExchanges } from "../../redux/exchangesReducer";
import { StyledBtn, DeleteBtn } from "./Exchanges.styles";
import { toast } from "react-toastify";

const Exchanges = () => {
  const exchanges: any = useSelector((state: any) => state.exchanges.data);
  const [open, setOpen]: [boolean, any] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const [editObj, setEditObj]: any = useState({
    name: "",
    apiKey: "",
    apiSecret: "",
    password: "",
  });

  const handleEdit = (obj: any = {}) => {
    handleOpen();
    setEditObj(obj);
    console.log(obj);
  };

  const handleObjChange = (value: string, objName: string) => {
    setEditObj({ ...editObj, [objName]: value });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "#212121",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "18px 18px 5px 5px",
    padding: "40px 40px 100px",
  };

  const axios = require("axios");

  const handleSubmit = () => {
    console.log(editObj);
    setOpen(false);
    axios
      .post("http://localhost:9191/editExchange", editObj)
      .then((data: any) => {
        dispatch(fetchExchanges());
        toast.success(data.data);
      });
  };

  const handleDelete = () => {
    axios
      .post("http://localhost:9191/deleteExchange", { id: editObj.id })
      .then((data: any) => {
        dispatch(fetchExchanges());
        setOpen(false);
        toast.success(data.data);
      });
  };

  return (
    <>
      <ExchangesList exchangesArray={exchanges} editFunction={handleEdit} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomInput
            handleChange={(value: string) => {
              handleObjChange(value, "name");
            }}
            label={"Name"}
            value={editObj.name}
          />
          <CustomInput
            handleChange={(value: string) => {
              handleObjChange(value, "apikey");
            }}
            label={"API Key"}
            value={editObj.apikey}
          />
          <CustomInput
            handleChange={(value: string) => {
              handleObjChange(value, "secret");
            }}
            label={"API Secret"}
            value={editObj.secret}
          />
          {editObj.password && (
            <CustomInput
              handleChange={(value: string) => {
                handleObjChange(value, "password");
              }}
              label={"Password"}
              value={editObj.password}
            />
          )}
          <div style={{ width: "fit-content", margin: "30px auto 0" }}>
            <StyledBtn onClick={handleSubmit}>Submit</StyledBtn>
          </div>
          <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
        </Box>
      </Modal>
    </>
  );
};
export default Exchanges;
