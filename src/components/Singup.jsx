export default function Signup() {

    function handleSubmit(e) {
     e.preventDefault();

     //! Per poter utilizzare Form Data , bisogna assicurarsi che ogni campo input abbia la proprieta' "name"
     const fd = new FormData(e.target);
     console.log(fd);

    // in questo modo posso estrarre per ogni input il proprio valore, utilizzando il metodo get() di FormData, se dovessi farlo per ogni input risulterebbe ripetitivo quindi utilizzo il metodo di js Object.fromEntries su entries() di FormData
    //  const eneterEmail = fd.get('email')

    //?Avendo piu valori per il name acquisition devo prima prendere tutti i valori ed inserirli in un arrai , usando il metodo FindAll , successivamente asssegno alla chiave acquisition l array con tutti i valori 
    const acquisitionChannel = fd.getAll('acquisition')

    const data = Object.fromEntries(fd.entries());
    //? Object.fromEntries = Converte un elenco di coppie chiave-valore in un oggetto.
    //?Il metodo entries() di FormData restituisce un iteratore che contiene array di coppie [chiave, valore] per ogni elemento nel FormData.
    //? Quindi :
    //? fd.entries() crea un iteratore con tutte le coppie chiave-valore del form.
    //? Object.fromEntries() prende questo iteratore e lo converte in un oggetto JavaScript

    data.acquisition = acquisitionChannel


     console.log(data);
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
            />
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }