import { Fragment, useEffect } from "react";
import NewsletterModal from "../modals/newsletter-modal";

export default function Newsletter() {
  let btn;

  useEffect(() => {
    setTimeout(function(){ btn && btn.click(); }, 10000); // 10 second delay
  }, [btn]);

  return (
    <Fragment>
      <NewsletterModal />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#newsletter"
        ref={node => (btn = node)}
      />
    </Fragment>
  )
}
