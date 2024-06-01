import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_ROOMS } from "../../utils/mutations";
import { QUERY_GET_ROOMS } from "../../utils/queries";
import { useState } from "react";
import style from "./UpdateRoom.module.css"

const UpdateRooms = () => {
  const [roomAmount, setRoomAmount] = useState({available: ""});
  const [updateRoom, { error }] = useMutation(UPDATE_ROOMS);
  const {loading, data } = useQuery(QUERY_GET_ROOMS);

  const roomData = data
  console.log(roomData)

  const handleChange = (event) => {
    const { value } = event.target;

    setRoomAmount(value)
  }

  const handleRoomUpdate = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateRoom({
        variables: { id: roomAmount, available: roomAmount },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
        <div>
          <div>
            <p>There are currently putroomshere available</p>
          </div>
          <div>
            <form className={`form ${style.severityForm}`} onSubmit={handleRoomUpdate}>
                <input
                value='1'
                name='amount'
                type="number"
                placeholder="placeholder"
                className={`form-control ${style.formItem}`}
                onChange={handleChange}
                />
              <button className={`btn btn-warning ${style.button}`} type="submit">
                Submit
              </button>
              
              {error && (
                <div>
                  <p className={style.error}>{error.message}</p>
                </div>
              )}
                
            </form>
          </div>
        </div>
    </div>
  );
};

export default UpdateRooms