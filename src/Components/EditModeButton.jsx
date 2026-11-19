import { ecc } from '../StyleClasses.js';
function EditModeButton({ isEditing, setIsEditing }) {
  return (
    <>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? 'Exit Edit Mode' : 'Edit Mode'}
      </button>
    </>
  );
}

export { EditModeButton };
