import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Container } from "@mui/material";

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
    <Container sx={{ mt: 2, textAlign: "center" }}>
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
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}>
            {users.map((user: User) => (
              <Card
                key={user.id}
                sx={{
                  aspectRatio: "1 / 1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  padding: 3,
                  boxShadow: 4,
                  borderRadius: 3,
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
          </div>
        </Container>
      )}
    </Container>
  );
}

export default UserData;
