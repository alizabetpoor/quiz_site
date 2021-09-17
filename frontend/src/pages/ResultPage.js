import { useEffect, useState } from "react";
import Result from "../Components/Result/Result";
import { useToasts } from "react-toast-notifications";
import Layout from "../layout/Layout";
import { getResult } from "../Services/ServiceMethods";
import { getUserMeApi } from "../Services/UserServiceMethods";
import AuthenticateUser from "../Authentications/authenticateUserHook";
const ResultPage = (props) => {
  const [results, setResults] = useState([]);
  const { addToast } = useToasts();
  const authenticate = AuthenticateUser();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (authenticate) {
      getResult()
        .then((resresult) => {
          getUserMeApi(token).then((resuser) => {
            const filterResults = resresult.data.filter(
              (result) => result.contributor === resuser.data.id
            );
            setResults(filterResults);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (authenticate === false) {
      addToast("برای دیدن نتایج ابتدا لاگین کنید.", {
        appearance: "warning",
        autoDismiss: true,
      });
      props.history.push("/login");
    }
  }, [authenticate]);
  return (
    <Layout>
      {authenticate ? (
        <div className="results w-3/5 mt-4 grid grid-cols-3 gap-2">
          {!results.length ? (
            <p>نتیجه ای برای نمایش وجود ندارد</p>
          ) : (
            results.map((result) => {
              return <Result {...result} key={result.id} />;
            })
          )}
        </div>
      ) : null}
    </Layout>
  );
};

export default ResultPage;
