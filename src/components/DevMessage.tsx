/**
 * This is a DevMessage component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-7-31
 */
function DevMessage() {
    return (
        <div className="msg">
            Please note that this is a{' '}
            <span className="imp">development version</span> of the website.
            Some features may not work as expected. If you encounter any issues,
            please report by opening an{' '}
            <a
                href="https://github.com/cophilot/board-score-hub/issues"
                target="_blank"
                rel="noreferrer">
                issue
            </a>{' '}
            on GitHub. Also feel free to contribute to the project by creating a
            pull request :)
        </div>
    );
}
export default DevMessage;
