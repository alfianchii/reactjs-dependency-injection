// Helpers
import { baseUrl } from "../helpers/baseUrlPath";

const NotFound = () => {
  return (
    <>
      <html>
        <head>
          <meta http-equiv="refresh" content={`1; url=${baseUrl}`} />
        </head>
        <body>
          <section className={`mt-10`}>
            <div className={`mb-1`}>
              <div className={`flex flex-col text-center`}>
                <h1 className={`text-xl font-bold`}>Page Not Found :(</h1>
                <p className={`font-thin italic`}>
                  Redirecting to <a href="/index.html">index.html</a>...
                </p>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
};

export default NotFound;
