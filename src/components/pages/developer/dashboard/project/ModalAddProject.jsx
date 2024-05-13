import React from 'react'

const ModalAddProject = ({itemEdit}) => {
    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/project/${itemEdit.project_aid}` :`/v1/project` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["project"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        }else{
            dispatch(setError(true))
            dispatch(setMessage(data.error))
        }
        },
    });

    const initVal = {
        project_title: itemEdit ? itemEdit.project_title : "",
        project_category: itemEdit ? itemEdit.project_category : "",
        project_thumbnail: itemEdit ? itemEdit.project_thumbnail : "",
        project_description: itemEdit ? itemEdit.project_description : "",
        project_button: itemEdit ? itemEdit.project_button : "",
        project_image_1: itemEdit ? itemEdit.project_image_1 : "",
        project_image_2: itemEdit ? itemEdit.project_image_2 : "",
        project_image_3: itemEdit ? itemEdit.project_image_3 : "",
        project_image_4: itemEdit ? itemEdit.project_image_4 : "",
        project_image_5: itemEdit ? itemEdit.project_image_5 : "",
        project_image_6: itemEdit ? itemEdit.project_image_6 : "",
        project_publish_date: itemEdit ? itemEdit.project_publish_date : "",
    }

    const yupSchema = Yup.object({
        project_title: Yup.string().required('Required'),
        project_category: Yup.string().required('Required'),
        project_thumbnail: Yup.string().required('Required'),
        project_description: Yup.string().required('Required'),
        project_image_1: Yup.string().required('Required'),
        project_image_2: Yup.string().required('Required'),
        project_image_3: Yup.string().required('Required'),
        project_image_4: Yup.string().required('Required'),
        project_image_5: Yup.string().required('Required'),
        project_image_6: Yup.string().required('Required'),
        project_publish_date: Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Project</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                          mutation.mutate(values)
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                          
                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="project_title"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Category"
                              type="text"
                              name="project_category"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Thumbnail Image"
                              type="text"
                              name="project_thumbnail"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="project_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 1"
                              type="text"
                              name="project_image_1"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 2"
                              type="text"
                              name="project_image_2"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 3"
                              type="text"
                              name="project_image_3"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 4"
                              type="text"
                              name="project_image_4"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 5"
                              type="text"
                              name="project_image_5"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image 6"
                              type="text"
                              name="project_image_6"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="project_publish_date"
                          />
                      </div>
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalAddProject