import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import basicHttpAuthProvider from "./auth-provider/ra-auth-basic-http";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { InstructorList } from "./instructor/InstructorList";
import { InstructorCreate } from "./instructor/InstructorCreate";
import { InstructorEdit } from "./instructor/InstructorEdit";
import { InstructorShow } from "./instructor/InstructorShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"after school "}
        dataProvider={dataProvider}
        authProvider={basicHttpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Instructor"
          list={InstructorList}
          edit={InstructorEdit}
          create={InstructorCreate}
          show={InstructorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
