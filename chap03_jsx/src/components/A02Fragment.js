import { Fragment } from "react";

const A02Fragment = () => {
  // Fragment 태그는 컴파일시 삭제된다. 따라서 class, id 속성을 할당하지 않는다
  // Fragment 대신 <></> 사용 가능
  return (
    <Fragment>
      <h3>A02Fragment</h3>

      <>
        This is Content
      </>
    </Fragment>
  )
}
export default A02Fragment;
