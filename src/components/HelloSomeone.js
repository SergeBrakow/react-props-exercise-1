function HelloSomeone (name, greeting, hasDarkMode = true)  {
    return (<div className={hasDarkMode ? "dark" : ""}>
      <h2>{`${greeting} ${name === "Mario" ? "Boss" : name } `}</h2> 
      </div>
    );
}
export default HelloSomeone;