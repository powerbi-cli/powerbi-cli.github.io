// Copy paste of docs.microsoft.com as DocFX v3 is not yet fully available

var loc = {
    githubIssueHeader: "%0A%0A%0A---%0A%23%23%23%23 Document details%0A%0A",
    githubIssueDivider: "<hr>",
    githubIssueLinkWarning: "⚠ *Do not edit this section. It is required for docs.jppp.org ➟ GitHub issue linking.*",
    githubIssueStart: "\n[Start issue here]"
}

$(document).ready(function () {
    if (documentId === "") return
    const docFeedback = feedbackDocRepo + "/issues/new" + "?body=" + loc.githubIssueStart + loc.githubIssueHeader + loc.githubIssueLinkWarning + "%0A%0A* documentId=" + documentId + "%0A* documentUrl=" + documentUrl;
    const docIssues = feedbackDocRepo + "/issues?utf8=%E2%9C%93&q=" + documentId + "&in=body";
    const feedback = $("[id=feedback]");
    $(
        "<div class='feedback-alert choose-feedback-type'>\n" +
        "    <p aria-hidden='true' id='send-feedback-about'>Submit and view feedback for</p>\n" +
        "    <div class='choose-feedback-buttons has-margin-top-medium'>\n" +
        "        <a class='button feedback-type-product has-margin-bottom-small' aria-label='Send feedback about this product' href='" + feedbackProductRepo + "}' data-bi-name='product-feedback'>\n" +
        "            <span>This product</span>\n" +
        "            <span aria-hidden='true' class='icon docon docon-navigate-external is-size-h4 has-margin-left-none'></span>\n" +
        "        </a>\n" +
        "        <a class='button feedback-type-product has-margin-bottom-small github-link' aria-label='Send feedback about this page' data-bi-name='create-issue-on-github' href='" + docFeedback + "'>\n" +
        "            <span aria-hidden='true' class='docon docon-brand-github has-padding-right-extra-small'></span>\n" +
        "            <span>This page</span>\n" +
        "        </a>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<div class='action-container is-flex has-flex-justify-content-end has-margin-top-small has-margin-bottom-small'>\n" +
        "   <a class='view-on-github' data-bi-name='view-on-github' href='" + docIssues + "'>\n" +
        "        <span aria-hidden='true' class='docon docon-brand-github'></span>\n" +
        "        <span>View all page feedback</span>\n" +
        "        <span aria-hidden='true' class='icon docon docon-navigate-external is-size-h5'></span>\n" +
        "    </a>\n" +
        "</div>").insertAfter(feedback);
});