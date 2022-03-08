import { useState, useContext } from "react";
import styles from "../../styles/Add.module.css"
import { useRouter } from "next/router";
import CurrentUserContext from "../../utils/context";

import Head from "next/head";
import Image from "next/image";

type Props = {
  showDialog: boolean,
  setDialog: Function;
}

const AddGroup = ({ setDialog, showDialog }: Props) => {

  const router = useRouter();
  const [name, setName] = useState('');
  const { currentUser } = useContext(CurrentUserContext);
  const addGroup = async (e: React.FormEvent ) => {
    setDialog(false);
    e.preventDefault();
    try {
      const rawGroup = await fetch('/api/group/newGroup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name, 
          userId: currentUser?.id,
          userEmail: currentUser?.email,
        })
      })
      const group = await rawGroup.json();
      
      return group;

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Add</title>
        <meta name="Add a new Group" content="Create a new group of friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/raccoon.png" alt="Racoomend logo" width={200} height={143} />
      <form onSubmit={addGroup} className={styles.addForm}>
        <label htmlFor="name">Name</label>
        <input className={styles.formInput} id="name" name="name" type="text" placeholder="Cool name goes here" value={name} onChange={(e) => setName(e.target.value)} required/>
        
        <button type='submit' className={styles.addButton}>Create Group</button>
      </form>
    </div>
  )
}

export default AddGroup;