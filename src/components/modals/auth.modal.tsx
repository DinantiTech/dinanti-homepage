// "use client";

// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Divider } from "@nextui-org/react";
// import { Icon } from '@iconify/react'
// import Image from "next/image";

// import Logo from "@/assets/logo.svg";
// import { Dispatch, SetStateAction } from "react";

// export default function ModalAuth(props: TypeProps) {
//     return (
//         <>
//             <Modal
//                 isOpen={props.isOpen}
//                 onOpenChange={(data) => props.handeModal(data)}
//                 placement="top-center"
//                 backdrop="blur"
//             >
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             <ModalHeader className="flex flex-col gap-2 items-center justify-center w-full">
//                                 <Image width={300} height={300} src={Logo} alt="Logo Dinanti" className="w-24" />

//                                 <h3 className="text-lg">Selamat Datang</h3>
//                                 <p className="text-sm font-light">Silahkan login untuk ke Dashboard</p>

//                                 <Button fullWidth radius="full" className="flex items-center bg-transparent border-2 border-[#90957A] mt-4">
//                                     <Icon icon="flat-color-icons:google" className="text-xl" />
//                                     Masuk dengan Google
//                                 </Button>

//                                 <div className="flex items-center justify-center text-xs text-center font-light mt-5">
//                                     <Divider />
//                                     atau masuk menggunakan
//                                     <Divider />
//                                 </div>
//                             </ModalHeader>

//                             <ModalBody>
//                                 <Input
//                                     autoFocus
//                                     endContent={
//                                         <Icon icon="majesticons:mail" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                                     }
//                                     label="Email"
//                                     placeholder="Masukan alamat email"
//                                     variant="bordered"
//                                 />
//                                 <Input
//                                     endContent={
//                                         <Icon icon="lets-icons:lock-fill" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                                     }
//                                     label="Password"
//                                     placeholder="Masukan password"
//                                     type="password"
//                                     variant="bordered"
//                                 />
//                                 <div className="flex py-2 px-1 justify-between">
//                                     <Link color="primary" href="#" size="sm">
//                                         Lupa Password?
//                                     </Link>
//                                 </div>
//                             </ModalBody>

//                             <ModalFooter className="flex flex-col items-start justify-center">
//                                 <Button color="primary" onPress={onClose} radius="full" fullWidth className="bg-gray-400 text-gray-700 font-semibold">
//                                     Masuk
//                                 </Button>

//                                 <div className="flex items-center justify-start gap-x-1 text-sm mt-3">
//                                     <p>Belum punya akun?</p>
//                                     <Link href="/" className="text-sm">Daftar</Link>
//                                 </div>
//                             </ModalFooter>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }

// type TypeProps = {
//     isOpen: boolean;
//     handeModal: Dispatch<SetStateAction<boolean>>
// }
