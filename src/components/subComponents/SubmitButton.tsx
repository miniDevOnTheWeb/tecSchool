export function SubmitButton ({ loading, loadingText, baseText } : { loading : boolean, baseText : string, loadingText : string}) {
  return (
    <>
      <button type="submit">{ loading ? loadingText : baseText }</button>
    </>
  )
}