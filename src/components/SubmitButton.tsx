export function SubmitButton ({ loading, loadingText, baseText } : { loading : boolean, baseText : string, loadingText : string}) {
  return (
    <>
      <button className="submit-button" type="submit" disabled={loading}>{ loading ? loadingText : baseText }</button>
    </>
  )
}