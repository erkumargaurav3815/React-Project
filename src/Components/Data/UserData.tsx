import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent } from "@mui/material";
import { Box } from "@mui/material";
interface Address {
  street: string;
  suite: string;
  city: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

function UserData() {
  const [users, setUsers] = useState<User[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
        );

        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  const showData = (): void => {
    setShowTable(true);
  };

  const removeData = (): void => {
    setShowTable(false);
  };

  return (
    <Box sx={{ mt: 2, textAlign: "center" }}>
      {!showTable && (
        <Button variant="contained" color="primary" onClick={showData}>
          View Data
        </Button>
      )}

      {showTable && (
        <Button
          variant="contained"
          color="inherit"
          onClick={removeData}
          sx={{ mb: 2 }}>
          Remove Data
        </Button>
      )}

      {showTable && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
            mt: 2,
          }}>
          {users.map((user) => (
            <Card
              key={user.id}
              sx={{
                background: "#e3e5f0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: "6px 10px #e8dddd",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "10px 14px #d8caca",
                  cursor: "pointer",
                },
                // color: "white",
              }}>
              <CardContent>
                <h3>{user.name}</h3>

                <p>
                  <strong>ID:</strong> {user.id}
                </p>

                <p>
                  <strong>Username:</strong> {user.username}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>

                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>

                <p>
                  <strong>Website:</strong> {user.website}
                </p>

                <p>
                  <strong>Address:</strong> {user.address.street},{" "}
                  {user.address.suite}, {user.address.city}
                </p>

                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>

                <p>{user.company.catchPhrase}</p>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UserData;
