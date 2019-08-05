import generateUUID from 'uuid/v1';

const empties = {
  workflow: () => {
    const UUID = generateUUID();

    return ({
      "id": UUID,
      "name": "My workflow",
      "description": "",
      "visibility": "public|private",
      "is_favorite": false,
      "is_followed": false,
      "version": 2,
      "version_last_published": 2,
      "status": "in_progress",
      "modification_date": "in_progress",
      "category": "",
      "tags": [],
      "trigger": {},
      "timeout": {},
      "depends_on": [],
      "required_by": [],
      "root_interaction_id": "string",
      "interactions": [],
      "outputs": [],
      "properties": []
    });
  },
  chat_say: () => {
    const UUID = generateUUID();

    return ({
      "id": UUID,
      "name": "",
      "type": "chat_say",
      "custom_node_id": "string",
      "num_errors": 0,
      "num_warnings": 0,
      "outputs": []
    })

  },
  chat_confirm: () => {
    const UUID = generateUUID();

    return ({
      "id": UUID,
      "name": `Interaction ${UUID}`,
      "type": "chat_confirm",
      "num_errors": 0,
      "num_warnings": 0,
      "outputs": [
        {
          "id": "yes",
          "linked_interaction_id": null,
        },
        {
          "id": "no",
          "linked_interaction_id": null,
        },
        {
          "id": "#failure",
        }
      ]
    })
  },
}

export const getDefaultBlockData = (type) => { return empties[type]()};
