import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_ROOMS } from "../../utils/mutations";
import { QUERY_GET_ROOMS } from "../../utils/queries";
import { useEffect, useState } from "react";
import style from "./UpdateRoom.module.css";

const UpdateRooms = () => {
  const [roomInfo, setRoomAmount] = useState({ id: "", available: "" });
  const [formInfo, setFormState] = useState("");
  const { loading, data } = useQuery(QUERY_GET_ROOMS);
  const [updateRoom, { error }] = useMutation(UPDATE_ROOMS, {
    refetchQueries: [QUERY_GET_ROOMS, "GetRooms"],
  });

  useEffect(() => {
    if (data) {
      setRoomAmount({
        id: data.getRooms[0]._id,
        available: data.getRooms[0].available,
      });
    }
  }, [data, setRoomAmount]);

  const handleChange = (event) => {
    const { value } = event.target;

    setFormState(value);
  };

  const handleRoomUpdate = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateRoom({
        variables: { id: roomInfo.id, available: parseInt(formInfo) },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <h2 className={style.option}>Update available rooms</h2>
            <p>
              There are currently {roomInfo.available} urgent care rooms
              available
            </p>
          </div>
          <div>
            <form
              className={`form ${style.severityForm}`}
              onSubmit={handleRoomUpdate}
            >
              <input
                value={formInfo}
                name="number"
                type="number"
                placeholder="Update Avaiable Rooms"
                className={`form-control ${style.formItem}`}
                onChange={handleChange}
              />
              <button
                className={`btn btn-warning ${style.button}`}
                type="submit"
              >
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
      )}
    </div>
  );
};

export default UpdateRooms;
