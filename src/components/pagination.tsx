import { Fragment } from "react";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./catalyst/pagination";
interface PaginationModel {
  total_request: number;
  total_pages: number;
  page_size: number;
  current_page: number;
}
interface Props {
  pagination: PaginationModel;
}

export default function AppPagination({ pagination }: Props) {
  function getPaginationElements(pagination: PaginationModel) {
    const totalPagesArray = Array.from({ length: pagination.total_pages }).map(
      (_, index) => index + 1
    );
    if (pagination.total_pages <= 7)
      return totalPagesArray.map((page) => (
        <LocalPaginationPage
          index={page}
          current={pagination.current_page === page}
        />
      ));

    const resArray: React.JSX.Element[] = [];

    const firstPaginationPart = totalPagesArray.slice(0, 3);
    if (firstPaginationPart.includes(pagination.current_page)) {
      const _firstPaginationPart = totalPagesArray.slice(0, 4);
      const lastPaginationPart = totalPagesArray.slice(-2);
      addArrayToRes(_firstPaginationPart);
      resArray.push(<PaginationGap />);
      addArrayToRes(lastPaginationPart);
      return resArray;
    }

    const lastPaginationPart = totalPagesArray.slice(-3);
    if (lastPaginationPart.includes(pagination.current_page)) {
      const _lastPaginationPart = totalPagesArray.slice(-4);
      const firstPaginationPart = totalPagesArray.slice(0, 2);
      addArrayToRes(firstPaginationPart);
      resArray.push(<PaginationGap />);
      addArrayToRes(_lastPaginationPart);
      return resArray;
    }

    addArrayToRes(totalPagesArray.slice(0, 1));
    resArray.push(<PaginationGap />);
    addArrayToRes([
      pagination.current_page - 1,
      pagination.current_page,
      pagination.current_page + 1,
    ]);
    resArray.push(<PaginationGap />);
    addArrayToRes(totalPagesArray.slice(-1));
    return resArray;

    function addArrayToRes(arr: number[]) {
      resArray.push(
        ...arr.map((page) => (
          <LocalPaginationPage
            index={page}
            current={pagination.current_page === page}
          />
        ))
      );
    }
  }

  return (
    <div className="w-full">
      <Pagination>
        <PaginationPrevious
          href={
            pagination.current_page <= 1
              ? null
              : `?page=${pagination.current_page - 1}`
          }
          className="text-start"
        >
          Anterior
        </PaginationPrevious>
        <PaginationList>
          {getPaginationElements(pagination).map((page, index) => (
            <Fragment key={index}>{page}</Fragment>
          ))}
        </PaginationList>
        <PaginationNext
          href={
            pagination.current_page >=
            Math.ceil(pagination.total_request / pagination.page_size)
              ? null
              : `?page=${pagination.current_page + 1}`
          }
        >
          Siguiente
        </PaginationNext>
      </Pagination>
    </div>
  );
}

function LocalPaginationPage({
  index,
  current,
}: {
  index: number;
  current: boolean;
}) {
  return (
    <PaginationPage href={`?page=${index}`} current={current}>
      {index}
    </PaginationPage>
  );
}
