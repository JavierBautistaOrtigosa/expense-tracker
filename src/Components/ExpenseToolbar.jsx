import { CategoryFilter } from './CategoryFilter.jsx';
import { EditModeButton } from './EditModeButton.jsx';
import { ecc } from '../StyleClasses.js';

function ExpenseToolbar({
  selectedCategory,
  setSelectedCategory,
  isEditing,
  setIsEditing
}) {
  return (
    <div className={ecc.tb}>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <EditModeButton isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  );
}

export { ExpenseToolbar };
