import { useState, useEffect } from "react";
import { Form, FormBuilder } from "@formio/react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

import RenderOnRole from "../../routes/RenderOnRole";
import applicationMenu from "../../const/applicationMenu";
import { ApplicationMenuType, JsonSchemaType } from "../../types/applicationMenu";

import "./styles.css";

const Builder = () => {
  const [currentApplication, setCurrentApplication ] = useState<ApplicationMenuType>({} as ApplicationMenuType);
  const [jsonSchema, setSchema] = useState<JsonSchemaType>({ components: [] });

  const onFormChange = (schema:JsonSchemaType) => {
    setSchema({ 
      ...schema, 
      components: [...schema.components] 
    });
  };

  const handleSave = () => {
    axios.post(`http://localhost:3000/data`, {
      data: jsonSchema.components, 
      filename: currentApplication.dataSource
    })
    .then(res=>console.log(res));
  }

  useEffect(()=>{
    if(currentApplication && currentApplication.dataSource) 
      axios.get(`http://localhost:3000/data?filename=${currentApplication.dataSource}`)
        .then(res=>setSchema(prev=> ({...prev, components: res.data})))
  },[currentApplication])
  
  return (
    <>
      <div className="d-flex gap-4 mb-5">{
        applicationMenu.map(app=>
          <Button 
            className="shadow"
            style={{width: "150px", height: "150px"}}
            key = "app.dataSource"
            variant="outline-primary"
            onClick={()=>
              setCurrentApplication(prev=> ({
                ...prev, 
                dataSource: app.dataSource
              })
            )}
          >
            {app.label}
          </Button>
        )}
      </div>

      {jsonSchema.components.length ? 
        <>
          <RenderOnRole roles={["builder"]} showNotAllowed>
            <>
              <FormBuilder 
                form={jsonSchema} 
                onChange={onFormChange} 
              />

              <div className="my-4 d-flex w-100 align-items-center justify-content-end">
                <Button onClick={()=>handleSave()}>
                  Save This Application
                </Button> 
              </div>
            </>
          </RenderOnRole>
          
          <hr/>

          <Card className="my-4">
            <Card.Body className="p-5">
              <Form 
                form={jsonSchema} 
                onSubmit={(e:unknown)=>console.log(e)} 
              />
            </Card.Body>
          </Card>
        </>
      :<></>}
    </>
  );
};

export default Builder;
