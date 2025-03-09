import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types";

export type TTableData = Pick<
  TAcademicSemester,
 "name" | "year" | "startDate" | "endDate"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[]|undefined>( undefined);

  const { data: semesterData , isLoading , isFetching } = useGetAllSemestersQuery(params);

 

  const tableData =
    semesterData?.data?.map(({ _id, name, startDate, endDate, year }) => ({
  
      key: _id,
      name,
      startDate,
      endDate,
      year,
    })) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
      filters: [
        {
          text: '2024',
          value: '2024',
        },
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
      ],
    },
    {
      title: "start month",
      key: "startMonth",
      dataIndex: "startDate",
    },
    {
      title: "End month",
      key: "endMonth",
      dataIndex: "endDate",
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams :TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })
      );

     setParams(queryParams);
    }
  };

  if(isLoading){
    return <div>Loading...</div>
  }


  return (
    <Table
    loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      // showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
