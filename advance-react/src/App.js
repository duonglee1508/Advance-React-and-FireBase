import React, { useCallback, useMemo, useState } from "react";
import Count from "./components/advance-react/performance/Count";

import FirebaseAuth from "./firebase/FirebaseAuth";
// Re-render
function App() {
  return (
    <div>
      <FirebaseAuth></FirebaseAuth>
    </div>
  );
}

export default App;
