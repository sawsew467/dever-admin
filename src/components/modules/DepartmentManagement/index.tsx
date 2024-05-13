"use client";

import { Flex, Input, Pagination, Table, TableProps, Typography } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import { SearchOutlined } from "@ant-design/icons";
import _ from "lodash";

import { useTranslation } from "@/app/i18n/client";
import { useGetAllUsersQuery } from "@/store/queries/usersMangement";
import { createQueryString } from "@/utils/queryString";

import * as S from "./styles";

interface DataType {
  key: string;
  id: string;
  first_name: string;
  gender: string;
  phone_number: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "STT",
    dataIndex: "id",
    key: "id",
    width: 50,
    render: (text, _, index) => <Typography.Text>{index + 1}</Typography.Text>,
  },
  {
    title: "Tên",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
    key: "gender",
    width: 200,
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone_number",
    key: "phone_number",
    render: (text) => <Typography.Text>{text ?? "---"}</Typography.Text>,
  },
];

function DepartmentManagementModule() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const { t } = useTranslation(
    params?.locale as string,
    "departmentManagement"
  );

  const { result, total, isFetching } = useGetAllUsersQuery(
    {
      page: page,
      page_size: 10,
      search: search,
    },
    {
      selectFromResult: ({ data, isFetching }) => {
        return {
          result: data?.results ?? [],
          total: data?.count ?? 0,
          isFetching,
        };
      },
    }
  );

  const handlePageChange = (page: number) => {
    router.push(createQueryString("page", `${page}`));
  };

  const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(createQueryString("search", `${e?.target?.value}`));
  }, 300);

  return (
    <S.PageWrapper>
      <S.Head>
        <Typography.Title level={2}>{t("title")}</Typography.Title>
      </S.Head>
      <S.FilterWrapper>
        <Typography.Title level={5}>{t("Search")}</Typography.Title>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          onChange={handleSearch}
          defaultValue={search}
        />
      </S.FilterWrapper>
      <S.TableWrapper>
        <Table
          columns={columns}
          dataSource={result}
          loading={isFetching}
          pagination={false}
          rowKey={(record) => record.id}
        />
      </S.TableWrapper>
      <Flex justify="flex-end">
        <Pagination
          defaultCurrent={page}
          total={total}
          onChange={handlePageChange}
        />
      </Flex>
    </S.PageWrapper>
  );
}

export default DepartmentManagementModule;
